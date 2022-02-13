import React from 'react';
import { Text,View,ScrollView,Linking } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function FAQ (){
    
  return (
        <View>
        <ScrollView>
            <Card>
                <Card.Content>
                    <Title>Ishita Bhardwaj</Title>
                    <Paragraph>CSE student 23',Dell Summer Intern 2022</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg' }} />
                <Card.Actions>
                    <Button icon="linkedin" onPress={ ()=> Linking.openURL('https://www.linkedin.com/in/ishita-bhardwaj-b21782191') }>Linkedin</Button>
                    <Button icon="instagram" onPress={ ()=> Linking.openURL('https://www.instagram.com/ishiita_bhardwaj/') }>Instagram</Button>
                </Card.Actions>
            </Card>
            <Card>
                <Card.Content>
                    <Title>Ankur Saxena</Title>
                    <Paragraph>Computer Science Engineer | Full Stack Developer | UI/UX Designer</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://cdn.pixabay.com/photo/2019/03/31/14/31/italy-4093227_1280.jpg' }} />
                <Card.Actions>
                    <Button icon="linkedin" onPress={ ()=> Linking.openURL('https://www.linkedin.com/in/ankur-saxena-915672190/') }>Linkedin</Button>
                    <Button icon="instagram" onPress={ ()=> Linking.openURL('https://www.instagram.com/_ankur_saxena_/') }>Instagram</Button>
                </Card.Actions>
            </Card>
            <Card>
                <Card.Content>
                    <Title>Kshitij Pathak</Title>
                    <Paragraph>Your Noob Coder</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://cdn.pixabay.com/photo/2021/12/19/03/51/tree-6880117_1280.jpg' }} />
                <Card.Actions>
                <Button icon="linkedin" onPress={ ()=> Linking.openURL('https://www.linkedin.com/in/kshitij-p-703544136/') }>Linkedin</Button>
                <Button icon="instagram" onPress={ ()=> Linking.openURL('https://www.instagram.com/_kshitij_pathak_/') }>Instagram</Button>
                </Card.Actions>
            </Card>
            </ScrollView>
        </View>
    )
}
