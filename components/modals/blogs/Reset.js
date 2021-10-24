import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Container } from "./style";
import { setBlogResetModal, selectors as uiSelector } from "@/redux/slices/ui";
import { resetBlog } from "@/redux/slices/blog";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ResetBlogModal = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector(uiSelector.getModal);

  const closeModal = () => {
    dispatch(setBlogResetModal(false));
  };

  const handleReset = () => {
    dispatch(resetBlog());
    dispatch(setBlogResetModal(false));
  };

  return (
    <Modal
      isOpen={blogs.reset}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Reset Modal"
    >
      <Container>
        <h3>Are you sure to reset this?</h3>
        <ButtonGroup>
          <Button onClick={closeModal}>Cancel</Button>
          <Button onClick={handleReset}>Reset</Button>
        </ButtonGroup>
      </Container>
    </Modal>
  );
};

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid #dedede;
  outline: 0;
`;

export default ResetBlogModal;
