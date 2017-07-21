export class ApiClient {
    apiUrl = "http://localhost:3000/"
    ToBasicRequest(apiUrl, httpMethod) {
        return new Request(apiUrl, {
            method: httpMethod
                ? httpMethod
                : "GET",
            credentials: "include",
            mode: "cors"
        });
    }
    ToRequest(apiMethod, httpMethod) {
        return this.ToBasicRequest(this.apiUrl + apiMethod, httpMethod
            ? httpMethod
            : "GET");
    }
    checkUnauthorized(response) {
        if (response.status === 401) {
            throw new Error('Unauthorized');
        } else {
            return response.json();
        }
    }
    getOrganizationsList(criteria) {
        return fetch(this.ToRequest('api/search/' + criteria)).then(this.checkUnauthorized);
    }
}