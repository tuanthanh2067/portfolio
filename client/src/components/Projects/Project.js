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
  width: 45%;
  height: 250px;
  background: white;
  display: flex;
  flex-direction: column;
  margin: 2.5em 0em;
  border-radius: 12px;
  overflow: hidden;
  background: black;
  cursor: pointer;

  @media (max-width: 600px) {
    height: 220px;
  }
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
  font-size: 0.8em;
  @media (max-width: 450px) {
    font-size: 0.7em;
  }
`;

const StyledBody = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    object-fit: cover;
    &:hover {
      transform: scale(1.125);
    }
  }
`;

export default Project;
