import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../../Config/BaseUrl";
export default function CreateItems() {
  const [getMenu, setGetMenu] = useState([]);
  const [data, setData] = useState({
    itemName: "",
    menu: "",
    price: 0,
    description: "",
  });

  const handelChange = (value, name) => {
    setData((ref) => ({
      ...ref,
      [name]: value,
    }));
  };
  const handleSave = ()=>{
    
    axios.post(BaseUrl+"api/items",data).then((res)=>{
        console.log(res);
        
    })
  }
  useEffect(() => {
    axios.get(BaseUrl + "getmenu").then((response) => {
      console.log(response.data, "responsee");

      setGetMenu(response.data.data);
    });
  }, []);

  useEffect(() => {
    console.log(data, "data");
  }, [data]);

  return (
    <Card color="transparent" shadow={false} className=" items-center">
      <Typography variant="h4" color="blue-gray">
        Add Items
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your Items.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Item Name
          </Typography>
          <Input
            size="lg"
            value={data.itemName}
            onChange={(e) => {
              handelChange(e.target.value, "itemName");
            }}
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Category
          </Typography>
          <div className="w-100">
            <Select
              label="Select Version"
              onChange={(value) => handelChange(value, "menu")}
            >
              {getMenu.map((item, index) => (
                <Option key={index} value={item.menuName}>
                  {item.menuName}
                </Option>
              ))}
            </Select>
          </div>

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Price in dollers
          </Typography>
          <Input
            type="text"
            onChange={(e) => {
              handelChange(e.target.value, "price");
            }}
            size="lg"
            placeholder="Price"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Discription
          </Typography>
          <div className="w-100">
            <Textarea
              label="Discription"
              onChange={(e) => {
                handelChange(e.target.value, "description");
              }}
            />
          </div>
        </div>

        <Button className="mt-6" fullWidth onClick={handleSave}>
          Add Items
        </Button>
      </form>
    </Card>
  );
}
