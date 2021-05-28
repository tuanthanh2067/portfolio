import styled from "styled-components";

// page selector
import PageSelector from "../PageSelector/PageSelector";
import IconSelector from "../PageSelector/IconSelector";

export default function PageChange() {
  return (
    <StyledPageChange>
      <PageSelector />
      <StyledLeft>
        <IconSelector />
      </StyledLeft>
    </StyledPageChange>
  );
}

const StyledPageChange = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 100%;
  background: transparent;
  border-right: 1px solid white;
`;

const StyledLeft = styled.div`
  width: 100%;
  height: 100%;
`;
