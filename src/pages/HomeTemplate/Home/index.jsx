import Seat from "./Seat";
import { useSelector } from "react-redux";

export default function Home() {
  const props = useSelector((state) => state.bookingTicketReducer);
  const { listSeats, listSeatsSelected } = props;

  // Render dãy stt
  const renderRowIndex = () => {
    const data = listSeats[0];
    return (
      <div className="space-x-11">
        <span></span>
        {data.danhSachGhe.map((item) => {
          return <span key={item.soGhe}>{item.soGhe}</span>;
        })}
      </div>
    );
  };

  const renderListSeats = () => {
    return listSeats.map((row, index) => {
      if (index === 0) return;
      return (
        <div key={row.hang} className="space-x-6 space-y-6">
          <span>{row.hang}</span>
          {row.danhSachGhe.map((seat) => (
            <Seat key={seat.soGhe} seat={seat} />
          ))}
        </div>
      );
    });
  };

  const totalPrice = () => {
    return listSeatsSelected.reduce((total, seat) => (total += seat.gia), 0);
  };

  return (
    <div className="container mx-auto">
      <h1>Booking Online</h1>
      <div className="flex">
        <div className="w-3/5">
          {renderRowIndex()}
          {renderListSeats()}
        </div>
        <div className="w-2/5">
          <h1>Danh sách ghế đang chọn</h1>
          {listSeatsSelected.map((seat) => (
            <div key={seat.soGhe}>
              Ghế: {seat.soGhe} - Giá: {seat.gia}
            </div>
          ))}
          <div>Total: {totalPrice()}</div>
        </div>
      </div>
    </div>
  );
}
