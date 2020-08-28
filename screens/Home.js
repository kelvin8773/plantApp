/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  plants,
  friends,
} from '../constants';

const Home = () => {
  const [newPlants, setNewPlants] = React.useState(plants);
  const [friendList, setFriendList] = React.useState(friends);

  const renderNewPlant = (item, index) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: SIZES.base,
      }}>
      <Image
        source={item.img}
        resizeMode="cover"
        style={{width: SIZES.width * 0.22, height: '82%', borderRadius: 15}}
      />
      <View
        style={{
          position: 'absolute',
          bottom: '17%',
          right: 0,
          backgroundColor: COLORS.primary,
          paddingHorizontal: SIZES.base,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
      </View>

      <TouchableOpacity
        style={{
          position: 'absolute',
          top: '17%',
          left: 10,
        }}
        onPress={() => {
          const clone = [...newPlants];
          clone[index] = {
            ...clone[index],
            favorite: !clone[index].favorite,
          };
          setNewPlants(clone);
        }}>
        <Image
          source={item.favorite ? icons.heartRed : icons.heartGreenOutline}
          resizeMode="contain"
          style={{
            width: 15,
            height: 15,
          }}
        />
      </TouchableOpacity>
    </View>
  );

  const renderFriend = (friend, index) => (
    <View key={'friend' + index} style={index === 0 ? {} : {marginLeft: -20}}>
      <Image
        source={friend.img}
        resizeMode="cover"
        style={{
          height: 50,
          width: 50,
          borderRadius: 25,
          borderWidth: 3,
          borderColor: COLORS.primary,
        }}
      />
    </View>
  );

  const renderFriends = () => {
    if (friendList.length === 0) {
      return <View />;
    } else if (friendList.length <= 3) {
      return friendList.map((friend, index) => renderFriend(friend, index));
    } else {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {friendList
            .slice(0, 3)
            .map((friend, index) => renderFriend(friend, index))}

          <Text
            style={{marginLeft: 10, color: COLORS.secondary, ...FONTS.body3}}>
            + {friendList.length - 3} more
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* New Plant */}
      <View style={{height: '30%', backgroundColor: COLORS.white}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
          }}>
          <View
            style={{
              marginTop: SIZES.padding,
              marginHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plants</Text>
              <TouchableOpacity onPress={() => console.log('Focus on Press')}>
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>

            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item, index}) => renderNewPlant(item, index)}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Today's new share */}
      <View style={{height: '50%', backgroundColor: COLORS.lightGray}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{paddingTop: SIZES.base, paddingHorizontal: SIZES.padding}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
                Today's Share
              </Text>
              <TouchableOpacity onPress={() => console.log('See All pressed.')}>
                <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
                  Seel All
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: '88%',
                paddingTop: SIZES.base,
              }}>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={() => console.log('plant is pressed.')}>
                  <Image
                    source={images.plant5}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flex: 1, paddingTop: SIZES.base}}
                  onPress={() => console.log('plant is pressed.')}>
                  <Image
                    source={images.plant6}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1.3}}>
                <TouchableOpacity
                  style={{flex: 1, paddingLeft: SIZES.font}}
                  onPress={() => console.log('today plant pressed')}>
                  <Image
                    source={images.plant7}
                    resizeMode="cover"
                    style={{width: '100%', height: '100%', borderRadius: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Added Friends */}
      <View style={{height: '20%', backgroundColor: COLORS.lightGray}}>
        <View style={{flex: 1, backgroundColor: COLORS.lightGray}}>
          <View
            style={{
              paddingTop: SIZES.base,
              paddingHorizontal: SIZES.padding,
            }}>
            <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
              Add Friends
            </Text>
            <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
              {friendList.length} Total
            </Text>
            <View style={{flexDirection: 'row', height: '60%'}}>
              <View
                style={{
                  flex: 1.3,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {renderFriends()}
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
                  Add New
                </Text>
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.gray,
                    borderRadius: 5,
                  }}
                  onPress={() => console.log('add friends pressed.')}>
                  <Image
                    source={icons.plus}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
