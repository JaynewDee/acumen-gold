const TopHr = ({ displayState }: { displayState: String }) => {
  return (
    <div>
      <hr
        style={
          displayState === ""
            ? {
                width: "33rem",
                transition: "width .47s",
                transitionDelay: ".47s",
                marginTop: "0"
              }
            : {
                width: "33rem",
                transition: "width .47s",
                transitionDelay: ".55s"
              }
        }
      />
    </div>
  );
};

export default TopHr;
