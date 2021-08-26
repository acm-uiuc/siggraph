# [siggraph website](https://acm-uiuc.github.io/siggraph/)
The ACM-UIUC SIGGraph Website

(Create-react-app + Bootstrap v4)

## Contributing
To contribute to the site, you must be a part of SIGGraph UIUC:
1. Make changes to https://github.com/SIGGraph-UIUC/siggraph, a fork of the original acm-uiuc repository
2. Test those changes via `$ yarn run start` which creates a local development server
3. Use a Pull Request to merge those changes to the master branch
4. Upon approval, have someone run
    ```
    $ git checkout master
    $ git pull
    $ yarn run deploy
    ```
    They should then check that the deployment at https://siggraph-uiuc.github.io/siggraph looks correct.
5. Finally, you can make a PR from the fork to the original repository
