import { FlatList } from "react-native";
import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import { useState } from "react";

const msg = [
  {
    id: 1,
    title: `ListItem component so it shows chevrons on the right side.Bonus exercise: Make the chevrons optional. So, the ListItem component should have a booleanljlkjsdljflsdjklfjdkslfjlkdsjflkjdsfdlksfjlkdsjflkjdsklfjdslkjflsdjfkldsjflkdsjflkjdslkfjdslkfjlsdjflkdjsflkjdslkfjdslkfjsdjkflsjkdfl;sjkd;lfkop called showChevrons. With this, when using the ListItem, we can decide if we want to see the chevrons or not. I haven’t implemented this in this section, though.`,
    description:
      "istItem component so it shows chevrons on the right side.Bonus exercise: Make the chevrons optional. So, the ListItem component should have a booleanljlkjsdljflsdjklfjdkslfjlkdsjflkjdsfdlksfjlkdsjflkjdsklfjdslkjflsdjfkldsjflkdsjflkjdslkfjdslkfjlsdjflkdjsflkjdslkfjdslkfjsdjkflsjkdfl;sjkd;lfkop called showChevrons. With this, when using the ListItem, we can decide if we want to see the chevrons or not. I haven’t implemented this in this section, tho",
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(msg);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id != message);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={require("../assets/mosh.jpg")}
            title={item.title}
            showChevrons={true}
            subTitle={item.description}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(msg)}
      />
    </Screen>
  );
};

export default MessagesScreen;
