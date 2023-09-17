declare module "swagger-client" {
  export default class SwaggerClient {
    static resolve: <T>(options: {
      spec: T;
    }) => Promise<{ spec: T; errors: string[] }>;
  }
}
