import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <Link to="/">Introduction</Link>
        </li>
        <li>
          <Link to="/">Activities</Link>
        </li>
        <li>
          <Link to="/">Skills</Link>
        </li>
        <li>
          <Link to="/">Project</Link>
        </li>
        <li>
          <Link to="/">Timeline</Link>
        </li>
        <li>
          <Link to="/">Contact me</Link>
        </li>
      </ul>
    </StyledNavBar>
  );
}

const StyledNavBar = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      color: white;
      text-decoration: none;
      list-style: none;
      margin-right: 2.25em;
      a {
        color: white;
        text-decoration: none;
        font-size: 1.875em;
        transition: ease 0.15s all;

        &:hover {
          color: red;
        }
      }
    }
  }
`;
