package main

import (
	"context"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/awslabs/aws-lambda-go-api-proxy/chi"
	"fmt"
	"net/http"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)



func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	r.Get("/hello", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello from Klotho!"))
	})

	r.Get("/hello/{name}", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(fmt.Sprintf("Hello %s!", chi.URLParam(r, "name"))))
	})

	fmt.Println("Listening on :3000")

	/* @klotho::expose {
	 *   target = "public"
	 *   id = "app"
	 * }
	 */
	// http.ListenAndServe(":3000", r)
			// Begin - Added by Klotho
			chiLambda := chiadapter.New(r)
			handler := func(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
				return chiLambda.ProxyWithContext(ctx, req)
			}
			lambda.StartWithContext(context.Background(), handler)
			//End - Added by Klotho
}
