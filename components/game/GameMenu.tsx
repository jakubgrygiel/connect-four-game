import Link from "next/link";
import { useRef } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from{opacity:0;}
    to{opacity:0.5;}
`;

const slideIn = keyframes`
    from{transform: translateY(-1500px);}
    to{transform: translateY(0);}
`;

const StyledWrapper = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
  animation: ${fadeIn} 0.3s linear;
  transition: opacity 0.5s ease-in-out;
`;

const Modal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 80px;
  width: 480px;
  padding: 70px 40px 60px 40px;
  background-color: ${({ theme }) => theme.colors.purple};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 40px;
  animation: ${slideIn} 0.3s cubic-bezier(0.18, 0.59, 0.41, 1.21);
  transition: transform 0.3s cubic-bezier(0.68, -0.5, 0.51, 0.97);
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  a {
    width: 100%;
    text-decoration: none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 20px;
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.darkPurple};
    box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.darkPurple};
  }
`;

const QuitBtn = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
`;

interface IGameMenuProps {
  toggleMenu: () => void;
}

export default function GameMenu({ toggleMenu }: IGameMenuProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  function handleClickClose() {
    closeMenu();
  }

  function handleClickRestart() {
    closeMenu();
  }

  function closeMenu() {
    if (backdropRef.current != null && modalRef.current != null) {
      backdropRef.current.style.opacity = "0";
      modalRef.current.style.transform = "translateY(-1500px)";
    }
    setTimeout(() => {
      toggleMenu();
    }, 600);
  }

  return (
    <StyledWrapper>
      <Backdrop ref={backdropRef} onClick={handleClickClose} />
      <Modal ref={modalRef}>
        <BtnsWrapper>
          <Button onClick={handleClickClose}>CONTINUE GAME</Button>
          <Button onClick={handleClickRestart}>RESTART</Button>
          <Link href="/">
            <QuitBtn>QUIT GAME</QuitBtn>
          </Link>
        </BtnsWrapper>
      </Modal>
    </StyledWrapper>
  );
}
