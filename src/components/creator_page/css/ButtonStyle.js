import styled from 'styled-components';

export const ButtonWrapper = styled.div`
.button {
    width: 100%;
    padding-top: 20px
  }

  .btn {
    display: block;
    padding: 0.7em 1em;
    background: transparent;
    outline: none;
    border: 0;
    color: #28282d;
    letter-spacing: 0.1em;
    font-family: GenWanMin2 TW;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1;
    scale: 1.1;
    transition: transform 0.3s ease; // 添加過渡效果
  }

  .button:hover .btn {
    transform: scale(1.1); // 輕微放大
  }

  .cube {
    position: relative;
    transition: all 0.5s;
  }

  .cube .bg-top {
    position: absolute;
    height: 10px;
    background: #28282d;
    bottom: 100%;
    left: 5px;
    right: -5px;
    transform: skew(-45deg, 0);
    margin: 0;
    transition: all 0.4s;
  }

  .cube .bg-top .bg-inner {
    bottom: 0;
  }

  .cube .bg {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background: #28282d;
    transition: all 0.4s;
  }

  .cube .bg-right {
    position: absolute;
    background: #28282d;
    top: -5px;
    z-index: 0;
    bottom: 5px;
    width: 10px;
    left: 100%;
    transform: skew(0, -45deg);
    transition: all 0.4s;
  }

  .cube .bg-right .bg-inner {
    left: 0;
  }

  .cube .bg-inner {
    background: #CCA08C;
    position: absolute;
    left: 1px;
    right: 1px;
    top: 1px;
    bottom: 1px;
  }

  .cube .text {
    position: relative;
    transition: all 0.4s;
  }

  // .cube:hover .bg-inner {
  //   background: #414148;
  //   transition: all 0.4s;
  // }

  // .cube:hover .text {
  //   color: #c9bbbb;
  //   transition: all 0.4s;
  // }

  // .cube:hover .bg-right,
  // .cube:hover .bg,
  // .cube:hover .bg-top {
  //   background: #c9bbbb ; }

  .cube:active {
    z-index: 9999;
    animation: bounce 0.1s linear;
  }

  @keyframes bounce {
    50% {
      transform: scale(0.9);
    }
  }`;