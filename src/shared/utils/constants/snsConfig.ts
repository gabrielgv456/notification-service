export const configSNS = {
  topicArn: process.env.SNS_TOPIC_ARN,
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};

if (!configSNS.topicArn) throw new Error("Tópico ARN AWS não configurado!");
if (!configSNS.region) throw new Error("Região AWS não configurada!");
if (!configSNS.accessKeyId) throw new Error("Id Chave de Acesso AWS não configurada!");
if (!configSNS.secretAccessKey) throw new Error("Senha da Chave de Acesso AWS não configurada!");
