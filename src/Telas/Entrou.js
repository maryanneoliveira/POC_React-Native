
import React, { useState } from 'react';

import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const stories = [
  { id: '1', nome: 'Seu story', inicial: '+' },
  { id: '2', nome: 'Ana', inicial: 'A' },
  { id: '3', nome: 'Lucas', inicial: 'L' },
  { id: '4', nome: 'Mariana', inicial: 'M' },
  { id: '5', nome: 'Gabriel', inicial: 'G' },
  { id: '6', nome: 'Julia', inicial: 'J' },
];

const publicacoes = [
  {
    id: '1',
    nome: 'ana.fotografia',
    local: 'Maceió, Alagoas',
    descricao: 'Colecionando momentos e boas memórias. 🌊',
    imgPerfil: 'https://i.pravatar.cc/150?img=47',
    imgPubli: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    likeada: false,
    salva: false,
    likers: 248,
    tempo: 'HÁ 2 HORAS'
  },
  {
    id: '2',
    nome: 'lucas.travel',
    local: 'Brasil',
    descricao: 'A vida é feita de novos caminhos. 🌿',
    imgPerfil: 'https://i.pravatar.cc/150?img=12',
    imgPubli: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800',
    likeada: false,
    salva: false,
    likers: 512,
    tempo: 'HÁ 4 HORAS'
  },
  {
    id: '3',
    nome: 'mariana.daily',
    local: 'Alagoas',
    descricao: 'Pequenas pausas também são necessárias. ☕',
    imgPerfil: 'https://i.pravatar.cc/150?img=44',
    imgPubli: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    likeada: false,
    salva: false,
    likers: 186,
    tempo: 'HÁ 6 HORAS'
  },
  {
    id: '4',
    nome: 'gabriel.design',
    local: 'Maceió',
    descricao: 'Criando novas ideias todos os dias.',
    imgPerfil: 'https://i.pravatar.cc/150?img=11',
    imgPubli: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    likeada: false,
    salva: false,
    likers: 324,
    tempo: 'HÁ 8 HORAS'
  }
];

export default function Entrou() {

  const [feed, setFeed] = useState(publicacoes);

  function curtir(id) {
    setFeed(anterior =>
      anterior.map(item =>
        item.id === id
          ? {
              ...item,
              likeada: !item.likeada,
              likers: item.likeada
                ? item.likers - 1
                : item.likers + 1
            }
          : item
      )
    );
  }

  function salvar(id) {
    setFeed(anterior =>
      anterior.map(item =>
        item.id === id
          ? { ...item, salva: !item.salva }
          : item
      )
    );
  }

  function renderStories() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.stories}
      >
        {stories.map(story => (
          <View key={story.id} style={styles.story}>
            <View style={[
              styles.storyBorda,
              story.id === '1' && styles.storyProprio
            ]}>
              <View style={styles.storyInterior}>
                <Text style={styles.storyInicial}>
                  {story.inicial}
                </Text>
              </View>
            </View>

            <Text style={styles.storyNome}>
              {story.nome}
            </Text>
          </View>
        ))}
      </ScrollView>
    );
  }

  function renderPublicacao({ item }) {
    return (
      <View style={styles.publicacao}>

        {/* Perfil da publicação */}

        <View style={styles.perfil}>
          <Image
            source={{ uri: item.imgPerfil }}
            style={styles.avatar}
          />

          <View style={styles.perfilInfo}>
            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text style={styles.local}>
              {item.local}
            </Text>
          </View>

          <Ionicons
            name="ellipsis-horizontal"
            size={23}
            color="#FFF"
          />
        </View>

        {/* Imagem da publicação */}

        <Image
          source={{ uri: item.imgPubli }}
          style={styles.foto}
          resizeMode="cover"
        />

        {/* Ações */}

        <View style={styles.acoes}>

          <TouchableOpacity
            onPress={() => curtir(item.id)}
            accessibilityLabel="Curtir publicação"
          >
            <Ionicons
              name={item.likeada ? 'heart' : 'heart-outline'}
              size={28}
              color={item.likeada ? '#FF416C' : '#FFF'}
            />
          </TouchableOpacity>

          <Ionicons
            name="chatbubble-outline"
            size={25}
            color="#FFF"
          />

          <Ionicons
            name="paper-plane-outline"
            size={25}
            color="#FFF"
          />

          <TouchableOpacity
            style={styles.botaoSalvar}
            onPress={() => salvar(item.id)}
            accessibilityLabel="Salvar publicação"
          >
            <Ionicons
              name={item.salva ? 'bookmark' : 'bookmark-outline'}
              size={25}
              color="#FFF"
            />
          </TouchableOpacity>

        </View>

        {/* Informações da publicação */}

        <View style={styles.informacoes}>

          <Text style={styles.curtidas}>
            {item.likers.toLocaleString('pt-BR')} curtidas
          </Text>

          <Text style={styles.legenda}>
            <Text style={styles.nome}>
              {item.nome}{' '}
            </Text>

            {item.descricao}
          </Text>

          <Text style={styles.comentarios}>
            Ver comentários
          </Text>

          <Text style={styles.tempo}>
            {item.tempo}
          </Text>

        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#101012"
      />

      {/* Cabeçalho */}

      <View style={styles.header}>

        <Text style={styles.logo}>Social.</Text>

        <View style={styles.headerIcones}>
          <Ionicons
            name="heart-outline"
            size={27}
            color="#FFF"
          />

          <Ionicons
            name="paper-plane-outline"
            size={25}
            color="#FFF"
          />
        </View>

      </View>

      <Text style={styles.demo}>
        Demonstração acadêmica
      </Text>

      {/* Feed */}

      <FlatList
        data={feed}
        keyExtractor={item => item.id}
        renderItem={renderPublicacao}
        ListHeaderComponent={renderStories}
        showsVerticalScrollIndicator={false}
        style={styles.lista}
      />

      {/* Barra inferior */}

      <View style={styles.barra}>
        {[
          'home',
          'search-outline',
          'add-circle-outline',
          'film-outline',
          'person-circle-outline'
        ].map(icone => (
          <View key={icone} style={styles.itemBarra}>
            <Ionicons
              name={icone}
              size={27}
              color="#FFF"
            />
          </View>
        ))}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#101012',
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 15,
  },

  logo: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    letterSpacing: -1,
  },

  headerIcones: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  demo: {
    color: '#999',
    fontSize: 11,
    paddingHorizontal: 18,
    paddingBottom: 10,
  },

  lista: {
    flex: 1,
  },

  stories: {
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#29292E',
  },

  story: {
    alignItems: 'center',
    marginRight: 15,
    width: 70,
  },

  storyBorda: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#E64B87',
    padding: 3,
  },

  storyProprio: {
    borderColor: '#555',
  },

  storyInterior: {
    flex: 1,
    borderRadius: 40,
    backgroundColor: '#292930',
    alignItems: 'center',
    justifyContent: 'center',
  },

  storyInicial: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },

  storyNome: {
    color: '#DDD',
    fontSize: 11,
    marginTop: 7,
  },

  publicacao: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#29292E',
  },

  perfil: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 13,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#292930',
  },

  perfilInfo: {
    flex: 1,
    marginLeft: 10,
  },

  nome: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  local: {
    color: '#AAA',
    fontSize: 11,
    marginTop: 3,
  },

  foto: {
    width: '100%',
    aspectRatio: 4 / 5,
    backgroundColor: '#222',
  },

  acoes: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    gap: 18,
  },

  botaoSalvar: {
    marginLeft: 'auto',
  },

  informacoes: {
    paddingHorizontal: 15,
  },

  curtidas: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  legenda: {
    color: '#EEE',
    fontSize: 13,
    lineHeight: 20,
  },

  comentarios: {
    color: '#999',
    fontSize: 12,
    marginTop: 8,
  },

  tempo: {
    color: '#777',
    fontSize: 10,
    marginTop: 9,
  },

  barra: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#101012',
    borderTopWidth: 1,
    borderTopColor: '#29292E',
    paddingVertical: 14,
  },

  itemBarra: {
    alignItems: 'center',
    justifyContent: 'center',
  },

});
