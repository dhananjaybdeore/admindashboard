import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1676965385~exp=1676965985~hmac=0be91cc373611abef922a5d3bb96ac984bbefe46c8bd01aaa7351e18826b18ef"
              alt=""
            />
            <span className="widgetLgName">Tejas Gadi</span>
          </td>
          <td className="widgetLgDate">2 Feb 2023</td>
          <td className="widgetLgAmount">$ 12.25</td>
          <td className="widgetLgStatus">
            <Button type="Approved"></Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1676965385~exp=1676965985~hmac=0be91cc373611abef922a5d3bb96ac984bbefe46c8bd01aaa7351e18826b18ef"
              alt=""
            />
            <span className="widgetLgName">Tejas Gadi</span>
          </td>
          <td className="widgetLgDate">2 Feb 2023</td>
          <td className="widgetLgAmount">$ 12.25</td>
          <td className="widgetLgStatus">
            <Button type="Approved"></Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1676965385~exp=1676965985~hmac=0be91cc373611abef922a5d3bb96ac984bbefe46c8bd01aaa7351e18826b18ef"
              alt=""
            />
            <span className="widgetLgName">Tejas Gadi</span>
          </td>
          <td className="widgetLgDate">2 Feb 2023</td>
          <td className="widgetLgAmount">$ 12.25</td>
          <td className="widgetLgStatus">
            <Button type="Pending"></Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1676965385~exp=1676965985~hmac=0be91cc373611abef922a5d3bb96ac984bbefe46c8bd01aaa7351e18826b18ef"
              alt=""
            />
            <span className="widgetLgName">Tejas Gadi</span>
          </td>
          <td className="widgetLgDate">2 Feb 2023</td>
          <td className="widgetLgAmount">$ 12.25</td>
          <td className="widgetLgStatus">
            <Button type="Declined"></Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
