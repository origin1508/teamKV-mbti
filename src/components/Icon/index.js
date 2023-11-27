import styled from "styled-components";

const Icon = ({ name, width = 32 }) => {
  return (
    <>
      <IconImage src={`/images/${name}.png`} alt={name} width={width} />
    </>
  );
};

export default Icon;

const IconImage = styled.img``;
