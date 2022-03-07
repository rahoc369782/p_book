import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import "./modal_for_component.scss";
const style = {
    left:0,
    width:"100%"
}
const ModalComponent = ({Component,open_status,set_search_status}) => {
    // console.log('children,props: ', children,open_status);
  return (
    <div className="modal_container_for_component">
      <SwipeableDrawer
        anchor={"right"}
        classes={style}
        ModalProps={{width:"100%"}}
        open={open_status}
        onClose={() => set_search_status(!open_status)}
      >
        <Component set_search_status={set_search_status} />
      </SwipeableDrawer>
    </div>
  );
};

export {ModalComponent}
