import React,{useState} from "react";

function useList(init) {
  const [list, setList] = useState(init);
  return {
    list,
    removeItem(name) {
      setList([...list.filter((val, k) => name !== val.name)]);
    },
    changeName(key, newVal, index){
        if(key==='Enter'){
            const dummyList = [...list];
            dummyList[index].isEditable = !dummyList[index].isEditable;
            dummyList[index].name = newVal;
            setList([...dummyList])
          }
    },
    toggler(index){
        const dummyList = [...list];
      dummyList[index].isEditable = !dummyList[index].isEditable;
      setList([...dummyList])
    }
  };
}

export default useList;
