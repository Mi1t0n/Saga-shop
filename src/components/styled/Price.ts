
import styled from "styled-components";

interface IPrice {
    bgColor: priceColors
}
enum priceColors {
    Blue = '#54B3FF',
    Yellow = '#FFD508',
    Red = '#FF3C3C',
    Orange = '#FF6E00',
    Default = '#F0F0F4',
}

const {Yellow, Default} = priceColors

const Price = styled.span<IPrice>`
  background-color: ${({bgColor = Default}) => bgColor};
  padding: 3px 15px;
  border-radius: 5px;
  position: relative;
  color: ${({bgColor = Default}) => bgColor === Yellow || bgColor === Default ? 'black' : 'white'};
  width: fit-content;

  &:after, &:before {
    content: '';
    width: 8px;
    height: 8px;
    position: absolute;
    top: 50%;
    border-radius: 50%;
    background: transparent;
    transform: translateY(-50%);
  }

  &:before {
    left: -4px;
    background: linear-gradient(to left, #fff 0%, #fff 60%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%);
  }

  &:after {
    right: -4px;
    background: linear-gradient(to right, #fff 0%, #fff 60%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%);
  }
`
export {priceColors}
export default Price