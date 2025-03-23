import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  // App 컴포넌트를 렌더링합니다.
  render(<App />);

  // screen object를 이용해서 원하는 엘레멘트에 접근 (접근할 때 ID로 접근)
  const counterElement = screen.getByTestId("counter");

  // id가 counter인 엘레멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test('plus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

// 이벤트 클릭 테스트(with fireEvent
test("when the + button is pressed, the counter changes to 1", () => {
  render (<App />);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
})

// 스타일 테스트
test("on/off button has blue background", () => {
  render (<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor: "blue"} );
})

// 
test("Prevent the -,+ button from being pressed whe the on/off button is clicked", () => {
  render (<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
})
