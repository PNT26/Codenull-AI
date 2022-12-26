import styled from 'styled-components';
import authBackground from '../../assets/signup_bg.jpg';

const StyledHome = styled.div`

  background-color: #FAFCFF;

  .looper--bg {
    bottom: 0px;
    z-index: 1;
  }

  .hero__section-content {
    position: relative;
    z-index: 9;
  }

  .service-card {
    width: 370px;
    height: 370px;
    z-index: 9;
    cursor: pointer;
    transition: 0.2s ease-in;

    &:hover {
      box-shadow: 0px 15px 30px rgba(12, 28, 58, 0.05);
      border-radius: 50px 0px;
    }
  }

  .left-stroke {
    top: 40px;
  }

  .right-stroke {
    bottom: 80px;
  }

  .right-stroke {
    transform: rotate(180deg);
  }

  .service {
    &__content {
      z-index: 999 !important;
    }
  }

  .cases-card {
    width: 370px;
    height: 330px;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    color: var(--black);
    cursor: pointer;
    transition: 0.2s ease-in;

    &:hover {
      background-color: var(--dark);
      color: white;
    }
  }

  .case-separator {
    top: 56%;
  }

  .auth__section {
    background-image: url(${authBackground});
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100%;
    &-btn {
      right: 10px;
    }
  }

  a {
    text-decoration: none;
  }
  
`

export default StyledHome;
