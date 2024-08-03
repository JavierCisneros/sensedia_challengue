import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import Paginator from "../components/Paginator";
import { describe, it, expect, vi } from "vitest";
import FormUsers from "../components/FormUsers";
import Header from "../components/Header";
import TableUsers from "../components/TableUsers";
type PaginatorProps = {
  totalPages: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
};
describe("Footer", () => {
  it("should render the footer", async () => {
    render(<Footer />);
    expect(
      screen.getByText(
        "Francisco Javier Cisneros Avila ◦ Sensedia Technical Challenge 2024"
      )
    );
  });
});

const setup = (props: Partial<PaginatorProps> = {}) => {
  const initialProps: PaginatorProps = {
    totalPages: 5,
    currentPage: 1,
    paginate: vi.fn(),
    ...props,
  };

  return render(<Paginator {...initialProps} />);
};

describe("Paginator", () => {
  it("renders Previous button as disabled on the first page", () => {
    setup({ currentPage: 1 });
    const previousButton = screen.getByText("Previous");
    expect(previousButton).toHaveProperty("disabled", true);
  });

  it("renders Next button as disabled on the last page", () => {
    setup({ currentPage: 5 });
    const nextButton = screen.getByText("Next");
    expect(nextButton).toHaveProperty("disabled", true);
  });
  it("calls paginate with the correct page number on button click", () => {
    const paginateMock = vi.fn();
    setup({ currentPage: 2, paginate: paginateMock });

    const page3Buttons = screen
      .getAllByText("3")
      .filter((button) => button.tagName === "BUTTON");
    const page3Button = page3Buttons.length > 0 ? page3Buttons[0] : null;

    if (page3Button) {
      fireEvent.click(page3Button);
      expect(paginateMock).toHaveBeenCalledWith(3);
    }
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);
    expect(paginateMock).toHaveBeenCalledWith(3);

    const previousButton = screen.getByText("Previous");
    fireEvent.click(previousButton);
    expect(paginateMock).toHaveBeenCalledWith(1);
  });

  it("renders correct number of page buttons", () => {
    setup({ totalPages: 7, currentPage: 4 });
    const pageButtons = screen.getAllByRole("button");
    expect(pageButtons).toHaveLength(7);
  });

  it("calls paginate with the correct page number from the dropdown", () => {
    const paginateMock = vi.fn();
    setup({ currentPage: 3, paginate: paginateMock });

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: 5 } });
    expect(paginateMock).toHaveBeenCalledWith(5);
  });
});
//Working in how to test this components as well as this components use the next-router wich is not available in the test environment
//Must mock the router but I can make next-router-mock to work

/* describe("Table Users", () => {
  it("should render the table users", async () => {
    render(<TableUsers />);
  });
});

describe("Breadcrumb", () => {
  it("should render the breadcrumb", async () => {
    render(<TableUsers />);
  });
});

describe("Form User", () => {
  it("should render the form user", async () => {
    render(<FormUsers />);
  });
});
 */
