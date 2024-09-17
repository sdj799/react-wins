import styled from "styled-components";

const PlaterItemStyle = styled.li`
  position: absolute;
  width: 100%;
  max-width: 72px;
  padding: 6px 10px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAYCAYAAABZY7uwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANVJREFUeNrs0j0OAUEAxfG1xkdC9gRCwtYaVFxAohEJiUT0LqBQuIBO4giotDoahTMoaDXbbKNQrPcaDROdZt9L/rObKX+ZRFDwHSxnGvW5t9sM8J9y4r0QLdEKRQZHFm1RzdE4D81QEU1dHBPhfN0ItQjUk4V1fQKV5GCdTyBXDtZlhPNjAhKQgAQkIAEJSEAC0gQkIAH9fRGBQjlYdyfQQQ7WHQm0QA9ZfOyG1gS6ojEKZPLeBQ35cEy60+bFKVkpN/HtoirKxxSGj+SM9ujJi5cAAwAllRzksJCigAAAAABJRU5ErkJggg==");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    font-size: 12px;
    font-weight: 500;
  }

  &:first-child {
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:nth-child(2) {
    bottom: 100px;
    right: 21%;
  }

  &:nth-child(3) {
    bottom: 150px;
    right: 23%;
  }

  &:nth-child(4) {
    bottom: 100px;
    left: 21%;
  }

  &:nth-child(5) {
    bottom: 150px;
    left: 23%;
  }

  &:nth-child(6) {
    bottom: 200px;
    left: 15%;
  }

  &:nth-child(7) {
    bottom: 220px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:nth-child(8) {
    bottom: 200px;
    right: 15%;
  }

  &:nth-child(9) {
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:last-child {
    bottom: 50px;
    left: 15%;
  }
`;

const PlayerItem = () => {
  return (
    <>
      <PlaterItemStyle>
        <span>2. 조대현</span>
      </PlaterItemStyle>
      <PlaterItemStyle>
        <span>3. 문상철</span>
      </PlaterItemStyle>
      <PlaterItemStyle>
        <span>4. 김상수</span>
      </PlaterItemStyle>
      <PlaterItemStyle>
        <span>5. 황재균</span>
      </PlaterItemStyle>
      <PlaterItemStyle>
        <span>6. 심우준</span>
      </PlaterItemStyle>
      <PlaterItemStyle>
        <span>7. 김민혁</span>
      </PlaterItemStyle>
      <PlaterItemStyle>
        <span>8. 배정대</span>
      </PlaterItemStyle>
      <PlaterItemStyle>
        <span>9. 로하스</span>
      </PlaterItemStyle>
      <PlaterItemStyle>
        <span>P. 손동현</span>
      </PlaterItemStyle>
      <PlaterItemStyle>
        <span>D. 장성우</span>
      </PlaterItemStyle>
    </>
    // <>
    //   <PlaterItemStyle>
    //     <span>2. 양의지</span>
    //   </PlaterItemStyle>
    //   <PlaterItemStyle>
    //     <span>3. 양석환</span>
    //   </PlaterItemStyle>
    //   <PlaterItemStyle>
    //     <span>4. 강승호</span>
    //   </PlaterItemStyle>
    //   <PlaterItemStyle>
    //     <span>5. 허경민</span>
    //   </PlaterItemStyle>
    //   <PlaterItemStyle>
    //     <span>6. 김재호</span>
    //   </PlaterItemStyle>
    //   <PlaterItemStyle>
    //     <span>7. 이유찬</span>
    //   </PlaterItemStyle>
    //   <PlaterItemStyle>
    //     <span>8. 정수빈</span>
    //   </PlaterItemStyle>
    //   <PlaterItemStyle>
    //     <span>9. 조수행</span>
    //   </PlaterItemStyle>
    //   <PlaterItemStyle>
    //     <span>P. 김택연</span>
    //   </PlaterItemStyle>
    //   <PlaterItemStyle>
    //     <span>D. 김재환</span>
    //   </PlaterItemStyle>
    // </>
  );
};
export default PlayerItem;
