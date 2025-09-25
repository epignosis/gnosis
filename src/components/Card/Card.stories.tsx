import React, { useReducer } from "react";
import { StoryFn } from "@storybook/react";
import { Button, Heading, Text, ProgressBar } from "../../";
import { PlayUnitSVG } from "../../icons/";
import Card from "./Card";

export default {
  title: "components/Card",
  component: Card,
  decorators: [
    (Story: StoryFn): JSX.Element => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
};

const Template: StoryFn<{ isOverlayShow: boolean; isDrawerOpen: boolean }> = ({
  isOverlayShow,
  isDrawerOpen,
}) => {
  const [isOpen, toggle] = useReducer((state) => !state, isDrawerOpen);

  return (
    <Card>
      {isOverlayShow && <Card.Overlay>Hello Overlay</Card.Overlay>}
      <Card.Drawer
        isOpen={isOpen}
        title={
          <>
            <Text fontSize="md" weight="700">
              Course code:{" "}
            </Text>
            SAMP1
          </>
        }
        onClose={toggle}
        footer={<Button block>Read more</Button>}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam labore ratione error
        adipisci dolorem corporis voluptatibus quia nihil quaerat ipsa tempora, in neque facere
        doloremque aut tempore ullam molestias necessitatibus !
      </Card.Drawer>

      <Card.Header>
        <Card.Thumbnail
          src="https://talentlms-prod-frontend-static.s3.us-east-1.amazonaws.com/images/default-course.png"
          alt="An image"
        />
        {!isOverlayShow && (
          <Card.Hover>
            <div
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button size="lg" onClick={toggle} rounded>
                <PlayUnitSVG height={48} />
              </Button>
            </div>
          </Card.Hover>
        )}
      </Card.Header>
      <Card.Body>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <a>Something</a>
          <span>Details</span>
        </div>
        <Heading as="h3" size="md">
          Introduction to TalentLMS
        </Heading>
      </Card.Body>
      <ProgressBar percent={55} borderRadius="0" />
    </Card>
  );
};

export const KitchenSink = Template.bind({});

KitchenSink.args = {
  isOverlayShow: false,
  isDrawerOpen: false,
};
