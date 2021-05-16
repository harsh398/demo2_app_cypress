pipeline {
	agent any
	stages {
		stage('Clone Git Repo'){
				steps{
					git branch: 'main', url: 'https://github.com/harsh398/demo_app_cypress.git'
		    }
		}
		stage('Install Dependencies'){
				steps{
					bat 'npm install'
				}
		}
		stage('Run Tests'){
				steps{
					bat 'npm run test'
				}
		}
	}
}
