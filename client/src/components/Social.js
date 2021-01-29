import styled from "styled-components";

const Social = ({ name, image, to }) => {
  return (
    <a href={to}>
      <StyledImage src={image} alt={name}></StyledImage>
    </a>
  );
};

const StyledImage = styled.img`
  width: 60px;
  height: 60px;
`;

export default Social;
