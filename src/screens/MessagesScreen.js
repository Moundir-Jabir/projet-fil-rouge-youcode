import { FlatList } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { useState } from "react";

const msg = [
  {
    id: 1,
    title: "T1",
    description: "D1",
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
