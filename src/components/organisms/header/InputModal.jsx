import {
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

export const InputModal = (props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Input p={6} bg="gray.700" placeholder="Serch the docs" />
      </ModalContent>
    </Modal>
  );
};
