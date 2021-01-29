import styled from "styled-components";

const Project = ({ title, image, url }) => {
  const redirectHandler = () => {
    window.location.href = url;
  };

  return (
    <StyledWindow onClick={redirectHandler}>
      <StyledHeader>
        <StyledButtons>
          <CloseButton></CloseButton>
          <RestoreButton></RestoreButton>
          <MinimizeButton></MinimizeButton>
        </StyledButtons>
        <StyledTitle>{title}</StyledTitle>
      </StyledHeader>
      <StyledBody>
        <img src={image} alt={title}></img>
      </StyledBody>
    </StyledWindow>
  );
};

const StyledWindow = styled.div`
  width: 325px;
  height: 250px;
  background: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 4em;
  border-radius: 12px;
  overflow: hidden;
  background: black;
  cursor: pointer;
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 12.5%;
  background: #c4c4c4;
  display: flex;
  padding: 0 1em;
  align-items: center;
  justify-content: space-between;
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
`;

const RestoreButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e8a645;
`;

const MinimizeButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #2dba3b;
`;

const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 0.8em;
`;

const StyledBody = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.125);
    }
  }
`;

export default Project;
