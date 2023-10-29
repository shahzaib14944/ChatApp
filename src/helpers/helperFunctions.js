export const GPTBodyExport = (message) => {
    const data = {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: message,
          },
        ],
      };
      return data
}