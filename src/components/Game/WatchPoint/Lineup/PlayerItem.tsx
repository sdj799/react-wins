import styled from "styled-components";

interface PlayerItemProps {
  pos: string;
  name: string;
}

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

  /* 로하스 */
  &:first-child {
    bottom: 200px;
    right: 15%;
  }

  /* 김민혁 */
  &:nth-child(2) {
    bottom: 200px;
    left: 15%;
  }

  /* 장성우 */
  &:nth-child(3) {
    bottom: 50px;
    left: 15%;
  }

  /* 문상철 */
  &:nth-child(4) {
    bottom: 100px;
    right: 21%;
  }

  /* 황재균 */
  &:nth-child(5) {
    bottom: 100px;
    left: 21%;
  }

  /* 김상수 */
  &:nth-child(6) {
    bottom: 150px;
    right: 23%;
  }

  /* 배정대 */
  &:nth-child(7) {
    bottom: 220px;
    left: 50%;
    transform: translateX(-50%);
  }

  /* 심우준 */
  &:nth-child(8) {
    bottom: 150px;
    left: 23%;
    /* bottom: 200px;
    right: 15%; */
  }

  /* 조대현 */
  &:nth-child(9) {
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  /* 손동현 */
  &:last-child {
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const PlayerItem = ({ pos, name }: PlayerItemProps) => {
  return (
    <PlaterItemStyle>
      <span>{`${pos}. ${name}`}</span>
    </PlaterItemStyle>
  );
};
export default PlayerItem;
