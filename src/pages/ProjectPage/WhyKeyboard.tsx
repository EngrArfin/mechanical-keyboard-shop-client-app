import whyuse from "../../assets/images/whyuse.jpg";

import { Collapse, CollapseProps, Divider } from "antd";
const text = (
  <p style={{ paddingInlineStart: 24 }}>
    Mechanical keyboards are popular for their tactile feedback, durability, and
    customization options. Each key provides a satisfying response, improving
    typing accuracy and speed. They are built to last, often outliving
    traditional keyboards, and are ideal for gamers, professionals, and
    enthusiasts due to their fast response times, anti-ghosting features, and
    ergonomic designs. With customizable key switches, lighting, and keycaps,
    they also offer a unique, personalized experience. Mechanical keyboards
    enhance both performance and comfort, making them a top choice for serious
    users.
  </p>
);
const text1 = (
  <p style={{ paddingInlineStart: 24 }}>
    Mechanical keyboards offer a tactile feedback mechanism that provides a
    satisfying click or bump with each keypress. This not only enhances the
    typing experience but also improves accuracy and typing speed. Unlike
    membrane keyboards, mechanical ones give you a distinct feel when the key is
    actuated, making them perfect for both typing enthusiasts and professionals
    who spend long hours at their desks.
  </p>
);
const text2 = (
  <p style={{ paddingInlineStart: 24 }}>
    One of the biggest advantages of mechanical keyboards is the level of
    customization they offer. From different key switches (tactile, linear, or
    clicky) to customizable keycaps, backlighting, and even programmable keys,
    you can personalize your keyboard to suit your preferences. This flexibility
    makes mechanical keyboards appealing to a wide range of users, from gamers
    to coders to designers
  </p>
);
const text3 = (
  <p style={{ paddingInlineStart: 24 }}>
    Mechanical keyboards are popular for their tactile feedback, durability, and
    customization options. Each key provides a satisfying response, improving
    typing accuracy and speed. They are built to last, often outliving
    traditional keyboards, and are ideal for gamers, professionals, and
    enthusiasts due to their fast response times, anti-ghosting features, and
    ergonomic designs. With customizable key switches, lighting, and keycaps,
    they also offer a unique, personalized experience. Mechanical keyboards
    enhance both performance and comfort, making them a top choice for serious
    users.
  </p>
);
const text4 = (
  <p style={{ paddingInlineStart: 24 }}>
    Mechanical keyboards are a top choice for gamers due to their fast and
    responsive key switches. The ability to press multiple keys simultaneously
    without input issues (anti-ghosting and N-key rollover) ensures smooth and
    accurate performance during intense gaming sessions. The tactile feedback
    also gives gamers a better sense of control over their actions in real time.
  </p>
);

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Mechanical Keyboard Discription",
    children: text,
  },
  {
    key: "2",
    label: "Superior Typing Experience",
    children: text1,
  },
  {
    key: "3",
    label: "Durability and Longevity: ",
    children: text2,
  },
  {
    key: "4",
    label: "Customization Options: ",
    children: text3,
  },
  {
    key: "5",
    label: "Improved Gaming Performance:",
    children: text4,
  },
];

export const WhyKeyboard = () => {
  return (
    <div>
      <Divider style={{ borderColor: "#7cb305" }}>
        Why We Use Mechanical Keyboard ???
      </Divider>
      <div style={{ display: "flex" }}>
        <div>
          {/* <h1 style={{ marginTop: 10, marginLeft: 90 }}>
          {" "}
          
        </h1> */}
          <img
            style={{ height: 400, width: 500, marginLeft: 90 }}
            src={whyuse}
            alt=""
          />
        </div>
        <div style={{ marginTop: 30, marginLeft: 20 }}>
          <Collapse items={items} bordered={false} defaultActiveKey={["1"]} />;
        </div>
      </div>
    </div>
  );
};

export default WhyKeyboard;
