import discorsoApi from '../app/apis/discorso/discorso_api';

export const fetchChatMessage = async (
  userInput: string,
  type: 'aiml' | 'nlp'
) => {
  const bodyFormData = new FormData();

  bodyFormData.append('userInput', userInput);

  let result = '';

  await discorsoApi.post(`/${type}`, bodyFormData).then(function (response) {
    result = response.data.message;
  });

  return result;
};
