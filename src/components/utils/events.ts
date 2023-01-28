const handleKeyLeft = (e) => () => {};

const handleKeyUp = (e) => () => {
  const previous = e.target.previousElementSibling;
  if (!previous) return;
  else {
    previous.focus();
    previous.click();
  }
};

const handleKeyRight = (e) => () => {};

const handleKeyDown = (e) => () => {
  const next = e.target.nextElementSibling;
  if (!next) {
    return;
  } else {
    next.focus();
    next.click();
  }
};
const toStart = (e) => {
  const first = e.target.parentElement.children[0];
  first.focus();
  first.click();
};
const handleTab = (e) => () => {
  console.log(e.target);
  if (!e.target.nextElementSibling || !e.target.previousElementSibling) {
    toStart(e);
  } else {
    handleKeyDown(e)();
  }
};

export const KeyHandler = (e) => {
  const events = {
    ArrowLeft: handleKeyLeft(e),
    ArrowUp: handleKeyUp(e),
    ArrowRight: handleKeyRight(e),
    ArrowDown: handleKeyDown(e),
    Tab: handleTab(e)
  };
  return events[e.key] ? events[e.key]() : null;
};

export const ClickHandler = (e) => {
  const { className } = e.target;
};

export const handleHorizontalScroll = (e, length, current, set) => {
  const id = e.target.id;
  const newIdx =
    id === "left-btn" && current > 0
      ? current - 1
      : current < length - 1
      ? current + 1
      : e.preventDefault();
  set(newIdx);
};
