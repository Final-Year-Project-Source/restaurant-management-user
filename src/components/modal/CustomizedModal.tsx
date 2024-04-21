import { Modal } from 'antd';
import { FC } from 'react';
import { Button } from '../button';
import LoadingIndicator from '../LoadingIndicator';
import './customizedModal.scss';
import { CloseModalIcon } from '../Icons';
interface PropsModal {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  okText?: string;
  loading?: boolean;
  children: React.ReactNode;
  title: string;
  className?: string;
  disabled?: boolean;
}

const CustomizedModal: FC<PropsModal> = ({
  open,
  onOk,
  onCancel,
  okText,
  loading,
  disabled,
  children,
  title,
  className,
}) => {
  return (
    <Modal
      open={open}
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      className={`customized-modal ${className || ''}`}
      confirmLoading
      centered
      closeIcon={<CloseModalIcon />}
      footer={[
        <Button disabled={disabled || loading} key="ok" variant="secondary" onClick={onOk}>
          {okText || 'Confirm'}
        </Button>,
      ]}
    >
      {children}
      {loading && <LoadingIndicator />}
    </Modal>
  );
};

export default CustomizedModal;
