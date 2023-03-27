import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + ' | Dogs';
  }, [props]);
  return <></>;
};

export default Head;
