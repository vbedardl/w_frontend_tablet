import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { ListItem, Avatar, CheckBox } from "react-native-elements";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS, CREATE_PACKAGE } from "../../utils/Queries";

const MainScreen = (props) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const handleChange = (id) => {
    setSelectedUser(id);
  };

  const [createPackage] = useMutation(CREATE_PACKAGE);
  const { data, error, loading } = useQuery(GET_USERS);
  const cancel = () => {
    setSelectedUser(null);
  };
  const confirm = () => {
    createPackage({ variables: { id: selectedUser } });
    setSelectedUser(null);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Select who this package is for</Text>
      <View style={styles.inputView}>
        {data && data.users && (
          <>
            <FlatList
              data={data.users}
              renderItem={({ item }) => {
                return (
                  <ListItem bottomDivider>
                    <Avatar>
                      <CheckBox
                        checked={selectedUser === item.id ? true : false}
                        value={item.id}
                        onPress={() => handleChange(item.id)}
                      />
                    </Avatar>
                    <ListItem.Content>
                      <ListItem.Title>{item.name}</ListItem.Title>
                      <ListItem.Subtitle>#{item.unit.name}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </>
        )}
      </View>
      {selectedUser && (
        <>
          <TouchableOpacity style={styles.loginBtn} onPress={() => confirm()}>
            <Text style={styles.loginText}>CONFIRM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() => cancel()}>
            <Text style={styles.loginText}>CANCEL</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "100%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 400,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});

export default MainScreen;
