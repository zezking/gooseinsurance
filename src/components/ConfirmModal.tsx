interface ConfirmationModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  onConfirm: () => void;
}

import Modal from 'react-native-modal';
import { Container } from './Container';
import { theme } from '../theme';
import { Typography } from './Typography';
import { TouchableOpacity } from 'react-native';

export const ConfirmModal = ({
  openModal,
  setOpenModal,
  title,
  onConfirm,
}: ConfirmationModalProps) => {
  return (
    <Modal
      animationInTiming={1}
      animationOutTiming={1}
      isVisible={openModal}
      style={{ alignItems: 'center' }}>
      <Container
        height="36%"
        width="90%"
        alignItems="center"
        justify="center"
        paddingHorizontal="20px"
        paddingTop="20%"
        paddingBottom="20%"
        bgColor={theme.colors.white}
        style={{ borderRadius: 14 }}>
        <Typography fontSize="25px" fontWeight="Semibold" marginBottom="20px">
          {title}
        </Typography>

        <TouchableOpacity
          onPress={onConfirm}
          style={{
            width: '100%',
            height: 65,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            borderRadius: 10,
            backgroundColor: theme.colors.primary,
            marginBottom: 15,
          }}>
          <Typography
            fontSize="18px"
            fontWeight="Semibold"
            color={theme.colors.white}>
            Yes
          </Typography>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setOpenModal(false)}
          style={{
            width: '100%',
            height: 65,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            borderRadius: 10,
            borderColor: theme.colors.primary,
            borderWidth: 4,
          }}>
          <Typography
            fontSize="18px"
            fontWeight="Semibold"
            color={theme.colors.text}>
            No
          </Typography>
        </TouchableOpacity>
      </Container>
    </Modal>
  );
};
