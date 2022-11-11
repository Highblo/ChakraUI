import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback(({ title, description, status }) => {
    toast({
      title,
      description,
      status,
      duration: "5000",
      position: "top",
      isClosable: true
    });
  }, []);

  return { showMessage };
};