import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  
  // Example components for each tab
  import AddMenuTitle from "./AdminComponent/AddMenuTitle";
  import CreateItems from "./AdminComponent/CreateItems";
  
  export default function Creater() {
    const data = [
      {
        label: "AddMenuTitle",
        value: "html",
        component: <AddMenuTitle />,
      },
      {
        label: "Add Items",
        value: "react",
        component: <CreateItems/>,
      },
      
    ];
  
    return (
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, component }) => (
            <TabPanel key={value} value={value}>
              {component}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }
  