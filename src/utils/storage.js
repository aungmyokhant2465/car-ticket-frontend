function pushItem(itemObject, itemName) {
  let old = localStorage.getItem(itemName);
  if (old) {
    old = JSON.parse(old);
    for (let item in itemObject) {
      old[item] = itemObject[item];
    }
    localStorage.setItem(itemName, JSON.stringify(old));
  } else {
    let travel = {};
    for (let item in itemObject) {
      travel[item] = itemObject[item];
    }
    localStorage.setItem(itemName, JSON.stringify(travel));
  }
}

function getItem(items, itemName) {
  let old = localStorage.getItem(itemName);
  if (!old) {
    return null;
  }
  let simpliedOld = JSON.parse(old);
  let result = {};
  for (let item of items) {
    result[item] = simpliedOld[item];
  }
  return result;
}
function removeItem(itemName) {
  localStorage.removeItem(itemName);
  return true;
}

export default { pushItem, getItem, removeItem };
