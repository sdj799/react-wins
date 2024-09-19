import { FaFigma, FaGithub } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SocialStyle = styled.ul`
  width: 100%;
  display: flex;
  gap: 10px;
  padding-top: 40px;
  & > li {
    width: 38px;
    height: 38px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    & > a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      & > svg {
        font-size: 20px;
        color: #717781;
      }
    }
  }
`;

const Social = () => {
  return (
    <SocialStyle>
      <li>
        <Link to="https://github.com/project-wins/react-ktwiz" target="_blank">
          <FaGithub />
        </Link>
      </li>
      <li>
        <Link
          to="https://www.figma.com/design/cYvtDnXxX6l9mmYBOi2XkN/Ktwiz?node-id=0-1&t=LnNYLH0FyPx5eO8q-1"
          target="_blank">
          <FaFigma />
        </Link>
      </li>
      <li>
        <Link to="https://www.notion.so/sniperfactory1/KT-wins-fa7e73fb42cf42fa9c1b6e63516986b2" target="_blank">
          <RiNotionFill />
        </Link>
      </li>
    </SocialStyle>
  );
};
export default Social;
