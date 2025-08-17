function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div>
      <div className="flex">
        <img src={image} className="w-[30px] h-[30px] rounded-[30px]" />
        <div className="text-[10px] ml-10">
          <b>{name}</b>
          <div>{subtitle}</div>
          {time !== undefined ? (
            <div className="flex">
              <div>{time}</div>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s"
                }
                className="w-[12px] h-[12px] ml-2"
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="text-[12px]">{description}</div>
    </div>
  );
}

export default PostComponent;
