import "./items.css";
import Item from "../item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { getItemsList } from "../../../actions/items";
import EditItem from "../editItem/EditItem";
import Modal from "../../Modal/Modal";

export default function Items({ setOpen, admin, setAdmin }) {
  const dispatch = useDispatch();

  const { items, isLoading, filterBy, editableId } = useSelector(
    (state) => state.items
  );
  useEffect(() => {
    dispatch(getItemsList());
  }, [editableId]);
  if (!items.length && !isLoading) return "No Items";
  return (
    <Fragment>
      {items
        .filter((item) => {
          if (!filterBy.length) {
            return true;
          }
          const sizes = [...item.size];
          const hasSize = sizes.filter(function (n) {
            return filterBy.indexOf(n) !== -1;
          });

          if (hasSize.length) {
            return true;
          } else return false;
        })
        .map((item, key) => (
          <div className="items" key={key}>
            <Item
              id={item._id}
              name={item.name}
              price={item.price}
              picture={item.url}
              size={item.size}
              admin={admin}
              setAdmin={setAdmin}
              setOpen={setOpen}
            ></Item>
          </div>
        ))}
      {editableId && admin && (
        <Modal title="test" setAdmin={setAdmin}>
          <EditItem id={editableId} />
        </Modal>
      )}
    </Fragment>
  );
}
