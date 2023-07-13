package main

import (
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
	http.ListenAndServe(":3000", r)
}
