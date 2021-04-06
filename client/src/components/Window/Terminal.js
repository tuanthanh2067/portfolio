import styled from "styled-components";

const Terminal = ({ title, children, image }) => {
  return (
    <StyledWindow>
      <StyledHeader>
        <StyledButtons>
          <CloseButton></CloseButton>
          <RestoreButton></RestoreButton>
          <MinimizeButton></MinimizeButton>
        </StyledButtons>
        <StyledText>
          <StyledTitle>{title}</StyledTitle>
        </StyledText>
      </StyledHeader>
      <StyledBody>{children}</StyledBody>
    </StyledWindow>
  );
};

export default Terminal;

const StyledWindow = styled.div`
  width: 70%;
  max-width: 800px;
  height: 50%;
  background: white;
  display: flex;
  flex-direction: column;
  margin: 2.5em 0em;
  border-radius: 12px;
  overflow: hidden;
  background: #1f1f1f;
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 575px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 35px;
  background: rgb(240, 240, 240);
  display: flex;
  padding: 0 1em;
  align-items: center;
  justify-content: space-between;
`;

const StyledText = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButtons = styled.div`
  display: flex;
  div {
    margin: 0 0.175em;
  }
`;

const CloseButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e84545;
  @media (max-width: 450px) {
    width: 9px;
    height: 9px;
  }
`;

const RestoreButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e8a645;
  @media (max-width: 450px) {
    width: 9px;
    height: 9px;
  }
`;

const MinimizeButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #2dba3b;
  @media (max-width: 450px) {
    width: 9px;
    height: 9px;
  }
`;

const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 0.85em;
  font-style: italic;
  margin-left: 0.25em;
  @media (max-width: 450px) {
    font-size: 0.7em;
  }
`;

const StyledBody = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  color: #00c921;

  @media (max-width: 400px) {
    h5 {
      font-size: 0.8em;
    }
    div {
      font-size: 0.95em;
    }
  }
`;
