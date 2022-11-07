import { LoadMoreButton } from './Button.styled';

export function Button({ children, onClick }) {
  return (
    <LoadMoreButton type="button" onClick={onClick}>
      {children}
    </LoadMoreButton>
  );
}
