import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './single.scss';
import img from './pexels-yasin-aydın-15565598.jpg'
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

function Single() {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editBtn">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={img} alt="" className='itemImg'/>
              <div className="details">
              <h1 className="itemTitle">John Doe</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue"> johndoe@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Contact:</span>
                <span className="itemValue"> +33 321457 74345</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue"> St.34 Howgwards </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue"> USA</span>
              </div>
              </div>
            </div>
          </div>
          <div className="right">
              <Chart aspect={3 / 1} title={"User spending (Last 6 months)"}/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transection</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
